import Background from './Background';
import MusicList from './MusicList';

interface Props {
  type: string;
  title: string;
  color: string;
}

const Section = ({ type, title, color }: Props) => {
  return (
    <>
      <Background type={type} title={title} color={color} />
      <MusicList />
    </>
  );
};

export default Section;
