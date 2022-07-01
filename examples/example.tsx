interface IConfig {
  foo: string;
}

interface IScoreDisplayProps {
  starWarsPoints: number;
  starTrekPoints: number;
  config: IConfig;
}

// Hello world
const ScoreDisplay = (props: IScoreDisplayProps) => {
  return (
    <div className="score-display">
      <a href="#">Link</a>
    </div>
  );
};
