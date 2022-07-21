import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import * as yup from 'yup';

import { Input } from '@components/Input';
import { Form } from '../../components/Form';
import { InputSubmit } from '@components/Input/InputSubmit';
import { getSpecificationsProduct } from '@services/api/api';
import { Select } from '@components/Select';
import * as Styled from './styles';
import { Column } from 'primereact/column';

const schema = yup
  .object({
    name: yup.string().required().min(5, 'msg customiza').max(255),
    description: yup.string().required().min(10),
    slug: yup.string().required(),
    stock: yup.number().required().min(1),
    previousPrice: yup.number().min(1),
    currentPrice: yup.number().required().min(1),
    picture: yup
      .mixed()
      .required('You need to provide a file')
      .test('fileRequired', 'File is required', (value) => {
        console.log('o value', value.length);

        return value && value.length > 0;
      })
      .test('fileSize', 'The file is too large', (value) => {
        return value && value.length > 0 && value[0].size <= 200000;
      })
      .test('type', 'We only support jpeg or png', (value) => {
        return (
          value &&
          value.length > 0 &&
          (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        );
      }),
    sizes: yup
      .array()
      .of(
        yup.object().shape({
          key: yup.number().required('key is required (from label)'),
          value: yup.string().required('Value is required'),
        }),
      )
      .test('required', 'options is required', (value) => {
        console.log('size value', value);
        return Array.isArray(value) && value.length > 0;
      }),
    // SubCategories:
    // Categories:
    // Colors:
    // Brands:
    // Images:
    // Cupom:
    // set games -> manda os games | seta os games
  })
  .required();

export const FormProduct = (): JSX.Element => {
  const [specifications, setSpecifications] = useState();

  const {
    control,
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitCreateProduct = (teste: any) => {
    console.log('sou o teste', teste);
  };

  useEffect(() => {
    async function exec() {
      const data = await getSpecificationsProduct();
      setSpecifications(data);
    }
    exec();
  }, []);

  watch('picture');
  return (
    <Styled.Wrapper>
      <Form
        title="Create Product"
        handleFormSubmit={handleSubmit(handleSubmitCreateProduct)}
      >
        <Input
          type={'text'}
          placeholder="Insert name"
          label="name"
          error={formState.errors.name}
          {...register('name')}
        />

        <Input
          type={'text'}
          label="description"
          placeholder="Insert description"
          {...register('description')}
          error={formState.errors.description}
        />

        <Input
          type={'text'}
          label="slug"
          placeholder="Insert slug"
          {...register('slug')}
          error={formState.errors.slug}
        />

        <Input
          type={'number'}
          label="stock"
          placeholder="Insert amount stock"
          min={1}
          defaultValue={1}
          {...register('stock')}
          error={formState.errors.stock}
        />

        <Input
          type={'number'}
          label="current price"
          placeholder="Insert current price"
          min={1}
          defaultValue={1000}
          {...register('currentPrice')}
          error={formState.errors.currentPrice}
        />

        <Input
          type={'number'}
          label="previous price"
          placeholder="Insert previous price"
          min={1}
          defaultValue={1000}
          {...register('previousPrice')}
          error={formState.errors.previousPrice}
        />

        <Select
          control={control}
          multiSelectOptions={specifications?.colors}
          title="Colors"
          name={'colors'}
          placeholder={'Select colors'}
        />

        <Select
          control={control}
          multiSelectOptions={specifications?.brands}
          title="Brands"
          name={'brands'}
          placeholder={'Select brands'}
        />

        {specifications?.sizes && (
          <Select
            control={control}
            // name={'sizes'}
            multiSelectOptions={specifications.sizes}
            title="Sizes"
            placeholder={'Select sizes'}
            {...register('sizes')}
          />
        )}

        <Input
          type="file"
          multiple
          accept="image/png, image/jpeg"
          error={formState.errors.picture}
          setFiles={setValue}
          files={getValues().picture}
          {...register('picture')}
        />

        <InputSubmit text="create" />
      </Form>
    </Styled.Wrapper>
  );
};
