import { describe, it, expect } from 'vitest';
import router from '@/router';

describe('Router', () => {
  it('redirects to /form when navigating to /', async () => {
    await router.push('/');
    expect(router.currentRoute.value.path).toBe('/form');
  });

  it('redirects to /form when navigating to a different route', async () => {
    await router.push('/some-other-route');
    expect(router.currentRoute.value.path).toBe('/form');
  });

  it('does not redirect when navigating to /form', async () => {
    await router.push('/form');
    expect(router.currentRoute.value.path).toBe('/form');
  });
});
