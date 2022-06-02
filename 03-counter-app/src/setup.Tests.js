import '@testing-library/jest-dom/extend-expect';
import { EnzymeAdapter } from 'enzyme';
import { createSerializer } from 'enzyme-to-json'


Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer( createSerializer ({ mode: 'deep'}));