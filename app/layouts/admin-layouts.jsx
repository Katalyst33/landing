export default function AdminLayout({ children }) {
  return (
    <div>
      <div className="lg:container mx-auto pt-10">{children}</div>
    </div>
  );
}
