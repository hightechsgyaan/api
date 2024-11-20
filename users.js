export default function handler(req, res) {
  res.status(200).json({ users: [{ name: 'John Doe' }, { name: 'Jane Smith' }] });
}
