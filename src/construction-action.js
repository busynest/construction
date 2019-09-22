// @ts-check
export const PROJECT_DISPLAY = 'PROJECT_DISPLAY';
export const PHONEBOOK_INDUSTRY  = 'PHONEBOOK_INDUSTRY';

// UPDATE DRAWER STATE
export const showProjects = (residential) => {
  return {
    type: PROJECT_DISPLAY,
    residential
  };
};

export const industry = (industry) => {
  return {
    type: PHONEBOOK_INDUSTRY,
    industry
  };
};

export const nextPost = () => {};
export const previousPost = () => {};

