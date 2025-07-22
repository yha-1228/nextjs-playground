import { createMeta } from "@/create-meta";

export const metadata = createMeta({
  title: "About title",
});

export default function Page() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
