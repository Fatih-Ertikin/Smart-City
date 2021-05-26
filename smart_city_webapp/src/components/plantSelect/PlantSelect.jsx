import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setSelectedPlant } from './redux/PlantSelect';
import { useStyles } from './styles/plantSelect';

// TODO: get plants from redux state instead of hardcoding right here
const plants = [
  {
    id: 0,
    name: 'Tomaten plant',
    idealTemp: 22,
    idealSoilMoistureLevel: 50,
  },
  {
    id: 1,
    name: 'Munt plant',
    idealTemp: 18,
    idealSoilMoistureLevel: 20,
  },
  {
    id: 2,
    name: 'Bananen boom',
    idealTemp: 35,
    idealSoilMoistureLevel: 70,
  },
];

export const PlantSelect = () => {
  const [selectedPlantId, setSelectedPlantId] = useState(0);
  const classes = useStyles();

  const onSelectPlant = (plantTemplateId) => {
    setSelectedPlantId(plantTemplateId);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.select}
        labelId="demo-simple-select-label"
        id="plant-select"
        value={selectedPlantId}
        onChange={(event) => {
          onSelectPlant(event.target.value);
        }}
      >
        {plants.map((pt) => (<MenuItem key={pt.id} value={pt.id}>{pt.name}</MenuItem>))}
      </Select>
    </FormControl>
  );
};
