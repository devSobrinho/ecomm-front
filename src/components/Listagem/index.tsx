import * as Styled from './styles';

type List = {
  name: string;
  subList?: List[];
};

export const ListTotal = ({ name, subList }: List): JSX.Element => {
  return (
    <Styled.Wrapper>
      <p>{name}</p>
      {subList && (
        <ul>
          {subList?.map((sub, index) => (
            <ul key={index}>
              <li>
                {sub.subList ? (
                  <ListTotal subList={sub.subList} name={sub.name} />
                ) : (
                  <p>{sub.name}</p>
                )}
              </li>
            </ul>
          ))}
        </ul>
      )}
    </Styled.Wrapper>
  );
};
