type SwitchListProps = {
  active: boolean;
  onClick: () => void;
};

export const SwitchList = ({
  active,
  onClick,
}: SwitchListProps): JSX.Element => {
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
        d="M38.0357 21.8337H18.1411V23.8337H38.0357V21.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M38.0357 28.8337H18.1411V30.8337H38.0357V28.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
      <path
        d="M38.0357 35.8337H18.1411V37.8337H38.0357V35.8337Z"
        fill={active ? '#40BFFF' : '#C1C8CE'}
      />
    </svg>
  );
};
