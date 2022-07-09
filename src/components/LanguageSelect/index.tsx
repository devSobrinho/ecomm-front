import { Text } from '@components/Text';
import * as Styled from './styles';

interface LanguageData {
  text: string;
  value: string;
}

export type LanguageSelectProps = {
  languages: LanguageData[];
  title: string;
};

export const LanguageSelect = ({
  languages,
  title,
}: LanguageSelectProps): JSX.Element => {
  return (
    <Styled.Wrapper>
      <Text as="span" type="title-alternative" text={title} isCapitalize />
      <Styled.Select>
        {languages.map((language) => {
          return (
            <option key={language.value} value={language.value}>
              {language.text}
            </option>
          );
        })}
      </Styled.Select>
    </Styled.Wrapper>
  );
};
