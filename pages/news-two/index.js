function NewsTwo({ data }) {
  return <h1 className="content">{data}</h1>;
}

export default NewsTwo;

export async function getStaticProps(context) {
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
