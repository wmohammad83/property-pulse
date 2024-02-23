const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchProperties };
