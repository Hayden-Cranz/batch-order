const TOKEN   = import.meta.env.VITE_AIRTABLE_TOKEN;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

const url = (table: string) =>
  `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(table)}`;

export type MakerFields = {
  Name: string;
  Email: string;
  Social?: string;
  Inspo?: string;
};

export type BackerFields = {
  Name: string;
  Email: string;
};

export async function submitMaker(fields: MakerFields): Promise<void> {
  const res = await fetch(url('Makers'), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) throw new Error(`Airtable error ${res.status}`);
}

export async function submitBacker(fields: BackerFields): Promise<void> {
  const res = await fetch(url('Backers'), {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fields }),
  });
  if (!res.ok) throw new Error(`Airtable error ${res.status}`);
}
