import fakeFundraisers from './data/fake-entities';
import topFundraisers from './data/top-female-entities';
import { NEW_FUNDRAISERS } from './history/1666798382549-populate-fake-fundraisers-from-top-34';
import { socials } from './data/socials';

export function getSocialUuid(social) {
  let socialUuid;
  const findedSocial = socials.find((e) => {
    return e.name.toLowerCase().replace(' ', '') == social.toLowerCase().replace(' ', '');
  });
  if (findedSocial) {
    socialUuid = findedSocial.id;
  } else {
    return null;
  }
  return socialUuid;
}

export const getActualNumber = (number: any) => {
  const eq = `${number}`.toLowerCase().replace('k', '*1000').replace('m', '*1000000').replace('g', '*1000000000');
  // eslint-disable-next-line no-eval
  return parseInt(eval(eq));
};

export function tranformStringValue(value) {
  if (!value) {
    return null;
  }
  if (!value.length) {
    return null;
  }
  if (value == '-') {
    return null;
  }
  return `'${value.replace("'", '')}'`;
}

export function getFundraiserId(instagramId) {
  const existsFundraisers = [...fakeFundraisers, ...NEW_FUNDRAISERS, ...topFundraisers];
  const fundraiser = existsFundraisers.find((fundraiser) => {
    return fundraiser[1] == instagramId;
  });
  if (fundraiser) {
    return fundraiser[4];
  }
}
