// date is passed as a string because it's stored as such through the content collection
function formatDateString (date: Date | string) {
  return new Date(date).toLocaleDateString("de", {
    year: "2-digit",
    month: "long",
    day: "numeric",
  });
}



export { formatDateString }
