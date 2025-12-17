type WatchPageProps = {
  params: Promise<{ id: string }>;
};

export default async function WatchPage({ params }: WatchPageProps) {
  const { id } = await params;

  return (
    <div style={{ padding: 20 }}>
      <h2>Watch Video</h2>

      <video
        src={`/uploads/${id}.webm`}
        controls
        autoPlay
        style={{ width: "100%", marginTop: 20 }}
      />
    </div>
  );
}
