export function validateStoryInput(role, story) {
  const errors = [];
  if (!role || role.trim().length < 2) errors.push('Role must be at least 2 characters.');
  if (!story || story.trim().length < 10) errors.push('Story narrative must be at least 10 characters.');
  return { valid: errors.length === 0, errors };
}
