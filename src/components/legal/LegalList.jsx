function LegalList({ items }) {
  return (
    <ul className="ml-6 list-disc space-y-3 text-text-secondary">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default LegalList;
