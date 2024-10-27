import Card from '../UI/Card';
// import GadgetItem from './GadgetItem/GadgetItem';
import classes from './AvailableGadgets.module.css';

const DUMMY_GADGETS = [
  {
    id: 'm1',
    name: 'iPhone16',
    description: 'Sleek design, powerful performance.',
    price: 1200.99,
  },
  {
    id: 'm2',
    name: 'iPhone15',
    description: 'Sleek design, powerful camera.',
    price: 999.5,
  },
  {
    id: 'm3',
    name: 'iPhone14 Pro',
    description: 'Stunning display, powerful performance.',
    price: 777.99,
  },
  {
    id: 'm4',
    name: 'iPhone13 Pro Max',
    description: 'Exceptional battery, advanced camera.',
    price: 747.99,
  },
];

const AvailableGadgets = () => {
  const gadgetsList = DUMMY_GADGETS.map((gadget) => <li>{gadget.name}</li>)

  return (
    <section className={classes.gadgets}>
      <Card>
        <ul>{gadgetsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGadgets;