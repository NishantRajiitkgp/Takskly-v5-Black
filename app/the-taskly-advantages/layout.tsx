export default function AdvantagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`body { background-color: #0D0D0D !important; }`}</style>
      {children}
    </>
  );
}
