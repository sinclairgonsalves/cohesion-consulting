export interface InquiryPayload {
  fullName: string;
  workEmail: string;
  companyName: string;
  phoneNumber?: string;
  service?: string;
  teamSize?: string;
  message?: string;
  source: string;
}

/** Sends an inquiry to the server. Resolves with the server-issued reference
 *  only after delivery is confirmed; throws a user-facing message otherwise,
 *  so the form must never show a success screen for an unsent inquiry. */
export async function submitInquiry(payload: InquiryPayload): Promise<string> {
  const res = await fetch('/api/inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  let data: { success?: boolean; referenceId?: string; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    // Fall through to the generic error below.
  }
  if (!res.ok || !data.success || !data.referenceId) {
    throw new Error(data.error || 'Your inquiry could not be sent just now. Please try again.');
  }
  return data.referenceId;
}
