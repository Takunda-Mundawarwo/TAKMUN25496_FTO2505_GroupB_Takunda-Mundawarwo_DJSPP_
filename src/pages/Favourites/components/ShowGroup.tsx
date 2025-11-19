import EpisodePreview from "../../../components/EpisodePreview";
import type { ShowGroupProps } from "../../../types/types";

export function ShowGroup(props: ShowGroupProps) {
  const { title, favourites } = props;

  return (
    <>
      <h2 className="ShowGroupTitle">{title}</h2>
      {favourites.map((favourite) => {
        return <EpisodePreview key={favourite.title} {...favourite} />;
      })}
    </>
  );
}
