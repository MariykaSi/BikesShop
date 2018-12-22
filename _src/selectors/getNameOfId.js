export default function getNameOfId(data, itemId) {
  const item = data.find(item => item.id === itemId);
  return item ? item.name : "";
}
