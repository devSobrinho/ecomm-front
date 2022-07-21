import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { Text } from '@components/Text';
import { FilterTypeList } from './FilterTypeList';
import { FilterTypeColor } from './FilterTypeColor';
import * as Styled from './styles';

export type OptionsProps = {
  id?: string;
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

  const [rangeState, setRangeState] = useState('');
  const [optionsState, setOptionsState] = useState<ListOptions>([]);
  const inputRangeRef = useRef<HTMLInputElement>(null);

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
      if (query[queryName] === queryValue && props.title === queryName) {
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

  const handleRangeSelect = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRangeState(e.currentTarget.value);
  }, []);

  return (
    <Styled.Wrapper
      className={props.className}
      contentDirectionRow={props.typeFilter === 'colors' ? true : false}
    >
      <Text text={props.title} as="p" type="title-alternative" isUpperCase />
      <div>
        {props.options.map((option, index) => {
          const selectOption = optionsState[index]?.isActive;
          // if (!option) {
          //   return <></>;
          // }

          return (
            <React.Fragment key={index}>
              {!(props.typeFilter === 'range') && (
                <Styled.OptionContainer
                  key={`${option.id ? option.id : index + '-' + option}`}
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
                </Styled.OptionContainer>
              )}

              {props.typeFilter === 'range' && (
                <>
                  {option.range && (
                    <>
                      {/* <Styled.RangerOption
                        // valueCurrent={
                        //   String(query.range) ?? inputRangeRef.current?.value
                        // }
                        // current={option.range.current}
                        type="range"
                        max={option.range.maxValue}
                        min={option.range.minValue ?? 0}
                        // ref={inputRangeRef}
                        // defaultValue={option.range.maxValue}
                      /> */}

                      <Styled.WrapperRange
                        key={`${option.id ? option.id : index + '-' + option}`}
                      >
                        <div className="rangeInfo">
                          <Text
                            text={`R$ ${inputRangeRef.current?.value}`}
                            as="span"
                            type="text-card"
                          />
                        </div>
                        <input
                          type="range"
                          name=""
                          id=""
                          ref={inputRangeRef}
                          max={option.range.maxValue}
                          min={option.range.minValue ?? 0}
                          defaultValue={
                            query[props.title] ?? option.range.maxValue
                          }
                          onChange={(e) => handleRangeSelect(e)}
                        />
                        {inputRangeRef.current?.value &&
                          !(
                            inputRangeRef.current.value === query[props.title]
                          ) && (
                            <div className="buttonRange">
                              <input
                                type="button"
                                value="Apply"
                                onClick={() =>
                                  handleClickOptionSelect(option, props.title)
                                }
                              />
                            </div>
                          )}
                      </Styled.WrapperRange>
                    </>
                  )}
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Styled.Wrapper>
  );
};
