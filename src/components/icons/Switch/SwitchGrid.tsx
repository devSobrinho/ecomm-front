type SwitchGridProps = {
  active: boolean;
  onClick: () => void;
};

export const SwitchGrid = ({
  active,
  onClick,
}: SwitchGridProps): JSX.Element => {
  return (
    <svg
      width="56"
      height="59"
      viewBox="0 0 56 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M55.5624 0.83374H0.299805V58.8337H55.5624V0.83374Z"
        fill={active ? '#F1F3F4' : ''}
      />
      <path
        d="M21.2989 19.8337H16.8779V23.8337H21.2989V19.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M21.2989 27.8337H16.8779V31.8337H21.2989V27.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M21.2989 35.8337H16.8779V39.8337H21.2989V35.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M30.1412 19.8337H25.7202V23.8337H30.1412V19.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M30.1412 27.8337H25.7202V31.8337H30.1412V27.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M25.7202 35.8337H30.1412V39.8337H25.7202V35.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M38.983 19.8337H34.562V23.8337H38.983V19.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M38.983 27.8337H34.562V31.8337H38.983V27.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M38.983 35.8337H34.562V39.8337H38.983V35.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
    </svg>
  );
};
