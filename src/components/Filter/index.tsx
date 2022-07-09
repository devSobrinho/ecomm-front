import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Text } from '@components/Text';
import { FilterTypeList } from './FilterTypeList';
import { FilterTypeColor } from './FilterTypeColor';
import * as Styled from './styles';

export type OptionsProps = {
  name: string;
  amount?: number;
  color?: string;
  range?: {
    current?: string;
    minValue?: number;
    maxValue: number;
  };
};

export type FilterProps = {
  title: string;
  options: OptionsProps[];
  typeFilter: 'list' | 'colors' | 'range' | 'size';
  className?: string;
};

type Option = {
  id: string;
  isActive: boolean;
};

type ListOptions = Option[];

export const Filter = ({ ...props }: FilterProps): JSX.Element => {
  const { query, push, pathname } = useRouter();

  const [optionsState, setOptionsState] = useState<ListOptions>([]);
  const inputRangeRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const filterQueryName = query[props.title];
  //   const options = props.options.map((option) => {
  //     if (filterQueryName && filterQueryName.includes(option.name)) {
  //       return {
  //         id: option.name,
  //         isActive: true,
  //       };
  //     }
  //     return {
  //       id: option.name,
  //       isActive: false,
  //     };
  //   });
  //   setOptionsState(options);
  // }, []);

  useEffect(() => {
    const filterQueryName = query[props.title];

    const options = props.options.map((option) => {
      if (filterQueryName && filterQueryName === option.name) {
        return {
          id: option.name,
          isActive: true,
        };
      }
      return {
        id: option.name,
        isActive: false,
      };
    });
    setOptionsState(options);
  }, [query, props.options, props.title]);

  const handleClickOptionSelect = useCallback(
    (option: OptionsProps, queryName: string) => {
      const { name: queryValue, range } = option;

      //ROTA QUERY
      if (queryValue === 'range') {
        push({
          pathname,
          query: { ...query, [queryName]: inputRangeRef.current?.value ?? 0 },
        });
        return;
      }

      if (!queryName && !queryValue) return;
      if (query[queryName]?.includes(queryValue) && props.title === queryName) {
        delete query[queryName];

        push({ pathname, query });
        return;
      }

      query[queryName] = queryValue;

      push({ pathname, query });
      return;
    },
    [pathname, props.title, push, query],
  );

  return (
    <Styled.Wrapper
      className={props.className}
      contentDirectionRow={props.typeFilter === 'colors' ? true : false}
    >
      <Text text={props.title} as="p" type="title-alternative" isUpperCase />
      <div>
        {props.options.map((option, index) => {
          const selectOption = optionsState[index]?.isActive;

          return (
            <Styled.OptionContainer
              key={`${index}-${option}`}
              onClick={() => handleClickOptionSelect(option, props.title)}
            >
              {props.typeFilter === 'list' && (
                <>
                  <FilterTypeList option={option} active={!!selectOption} />
                </>
              )}

              {props.typeFilter === 'colors' && (
                <>
                  <FilterTypeColor
                    selectOption={selectOption}
                    color={option.color}
                  />
                </>
              )}

              {props.typeFilter === 'range' && (
                <>
                  {option.range && (
                    <Styled.RangerOption
                      valueCurrent={inputRangeRef.current?.value}
                      current={option.range.current}
                      type="range"
                      max={option.range.maxValue}
                      min={0}
                      ref={inputRangeRef}
                      defaultValue={option.range.maxValue}
                    />
                  )}
                </>
              )}
            </Styled.OptionContainer>
          );
        })}
      </div>
    </Styled.Wrapper>
  );
};
