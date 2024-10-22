import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(data, value, theme) {
  return {
    fontWeight: value.includes(data)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SelectParameters({data, setOption, name}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(['Todos']);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(
      value
    );
    setOption(
        value
    )
  };

  return (
    <div>
      <FormControl sx={{ width:'100%'}}>
        <InputLabel id="name-label">{name}</InputLabel>
        <Select
          labelId="options"
          id="options"
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={name} />}
          MenuProps={MenuProps}
          style={{margin:10, borderRadius:10, boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1)'}}
        >
          {data.map((option) => (
            <MenuItem
              key={option}
              value={option}
              style={getStyles(data, value, theme)}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
