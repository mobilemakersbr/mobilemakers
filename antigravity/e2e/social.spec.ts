import { test, expect } from '@playwright/test';

test.describe('Fluxo Social Antigravity', () => {
  test('deve logar e carregar a home com sucesso', async ({ page }) => {
    // 1. Ir para a página de login
    await page.goto('/login');
    
    // 2. Preencher credenciais reais
    await page.fill('input[type="email"]', 'matheuskurio@gmail.com');
    await page.fill('input[type="password"]', '123456');
    
    // 3. Clicar em Entrar
    await page.click('button[type="submit"]');
    
    // Esperar login concluir
    await page.waitForURL('/');
    
    // 4. Verificar se redirecionou para a Home
    await expect(page).toHaveURL('/');
    
    // 5. Verificar se o título do app está visível
    await expect(page.locator('h1')).toContainText('Antigravity');
  });

  test('deve conseguir navegar para o perfil', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'matheuskurio@gmail.com');
    await page.fill('input[type="password"]', '123456');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');

    // Clicar no link de Perfil no BottomNav
    await page.click('a[href="/profile"]');
    
    // Verificar se estamos na página de perfil
    await expect(page).toHaveURL('/profile');
  });

  test('deve conseguir curtir uma foto', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'matheuskurio@gmail.com');
    await page.fill('input[type="password"]', '123456');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');

    // Esperar as fotos carregarem
    await page.waitForSelector('img');
    
    // Pegar o primeiro botão de like
    const likeButton = page.locator('button[aria-label="Curtir foto"]').first();
    await expect(likeButton).toBeVisible();
    
    // Clicar e verificar se não deu erro (o feedback visual é via classe/cor)
    await likeButton.click();
  });

  test('deve visualizar a página de notificações', async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[type="email"]', 'matheuskurio@gmail.com');
    await page.fill('input[type="password"]', '123456');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');

    // Clicar no sino de notificações
    await page.click('a[href="/notifications"]');
    
    await expect(page).toHaveURL('/notifications');
    await expect(page.locator('h1')).toContainText('Atividade');
  });
});
