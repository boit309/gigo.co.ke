import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800">
      <Container>
        <p className="text-center text-slate-500">
          © {new Date().getFullYear()} GIGO.
          All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}