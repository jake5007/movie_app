import Image from "next/image";

type MovieCardProps = {
  title: string;
  image: string;
  genres: { text: string; id: string; __typename: string }[];
  plot: string;
  releaseYear: number;
};

const MovieCard = ({
  title,
  image,
  genres,
  plot,
  releaseYear,
}: MovieCardProps) => {
  image = !image ? "/images/default.jpg" : image;

  return (
    <div className="card bg-base-100 shadow-xl h-full">
      <figure
        className="overflow-visible tooltip tooltip-bottom"
        data-tip={plot ? plot : "-"}
      >
        <Image
          src={image}
          alt="Movie"
          width={0}
          height={0}
          sizes="100vw"
          className="relative -top-[10px] h-auto w-[75%] object-cover 
          shadow-lg shadow-black transition ease-in-out delay-75 duration-300 hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} ({releaseYear})
        </h2>
        <div className="flex gap-1 flex-wrap">
          {genres &&
            genres.map((genre) => (
              <div key={genre.id} className="badge badge-ghost">
                {genre.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
