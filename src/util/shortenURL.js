export default async function shortenURL(value) {
  let el = document.getElementById("link_shortner");
  // console.log(el);
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${el.value}`);

  const data = await res.json();
  const shortLink = data.result.full_short_link;

  return { link: value, shortened: shortLink };
}
