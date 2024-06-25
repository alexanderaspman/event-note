import CreateCategoryPost from "@/components/createCategoryPost";
import H1 from "@/components/h1";

export default function CreateCategoryPage() {
  return (
<main className="flex flex-col items-center pt-36 px-3 pr-36">
<H1>Create a category</H1>
<p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">Making it easier later to <span className="font-bold underline italic text-accent">find your notes</span></p>

    <CreateCategoryPost/>
</main>
)
}
