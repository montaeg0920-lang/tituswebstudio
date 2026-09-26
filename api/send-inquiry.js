const recipient = "tituswebdesign1@gmail.com";

const clean = (value, maximum) => String(value ?? "").trim().slice(0, maximum);

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, company, budget, message, website, websiteUrl } = request.body ?? {};
  if (website) return response.status(200).json({ ok: true });

  const inquiry = {
    name: clean(name, 100),
    email: clean(email, 160),
    company: clean(company, 120),
    budget: clean(budget, 80),
    message: clean(message, 5000),
    websiteUrl: clean(websiteUrl, 300)
  };

  if (!inquiry.name || !/^\S+@\S+\.\S+$/.test(inquiry.email) || !inquiry.message) {
    return response.status(400).json({ error: "Please add your name, a valid email address, and a short project description." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
    return response.status(503).json({ error: "The inquiry service is not configured yet. Please email tituswebdesign1@gmail.com directly." });
  }

  const text = [
    "New Titus Web Studio inquiry", "", "Name: " + inquiry.name, "Email: " + inquiry.email,
    "Company: " + (inquiry.company || "Not provided"), "Current website: " + (inquiry.websiteUrl || "Not provided"),
    "Estimated budget: " + (inquiry.budget || "Not provided"), "", "Project details:", inquiry.message
  ].join("\n");

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + process.env.RESEND_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL, to: [recipient], reply_to: inquiry.email, subject: "New project inquiry — " + inquiry.name, text })
    });
    if (!resendResponse.ok) return response.status(502).json({ error: "We could not send your inquiry just now. Please email us directly." });
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Inquiry delivery failed", error);
    return response.status(502).json({ error: "We could not send your inquiry just now. Please email us directly." });
  }
}
