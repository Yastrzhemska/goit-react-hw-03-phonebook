import { Text, InputFilter } from './FilterField.styled';

export const FilterField = ({ value, onChangeFilter }) => {
  return (
    <>
      <Text>Find contacts by name</Text>
      <InputFilter type="text" value={value} onChange={onChangeFilter} />
    </>
  );
};
