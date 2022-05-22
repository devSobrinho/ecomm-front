import { Text } from '@components/Text';
import { OptionsProps } from '.';
import * as Styled from './styles';

export type FilterTypeListProps = {
  option: OptionsProps;
  active: boolean;
};

export const FilterTypeList = ({
  option,
  active,
}: FilterTypeListProps): JSX.Element => {
  return (
    <>
      <Text
        text={option.name}
        as="p"
        type="logo-title"
        isActive={active}
        isCapitalize
      />
      {option.amount && (
        <Text
          text={String(option.amount)}
          as="span"
          type="title-alternative"
          isActive={active}
        />
      )}
    </>
  );
};
