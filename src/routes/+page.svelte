<script lang="ts">
  import { onMount } from 'svelte';

  interface Item {
    id: string;
    name: string;
    description: string;
    createdAt: string;
  }

  let items: Item[] = $state([]);
  let loaded = $state(false);

  onMount(async () => {
    const res = await fetch('/api/items');
    const data = await res.json();
    items = data.items;
    loaded = true;
  });
</script>

<svelte:head>
  <title>Flui Demo — SvelteKit 2</title>
</svelte:head>

<main class="page">
  <div class="badge">🚀 Flui Demo Application</div>
  <h1>Flui Demo — SvelteKit 2</h1>
  <p class="subtitle">SvelteKit 2 · Svelte 5 · Node adapter · Vite 6</p>

  <section class="card">
    <h2>API Endpoints</h2>
    <ul>
      <li><code>GET</code> <a href="/api/health">/api/health</a> — health</li>
      <li><code>GET</code> <a href="/api/items">/api/items</a> — list items</li>
      <li><code>POST</code> /api/items — create item</li>
      <li><code>GET</code> <a href="/api/openapi">/api/openapi</a> — spec</li>
      <li><code>GET</code> <a href="/docs">/docs</a> — Swagger UI</li>
    </ul>
  </section>

  <section class="card">
    <h2>Items ({items.length})</h2>
    {#if !loaded}
      <p class="muted">Loading...</p>
    {:else}
      {#each items as item (item.id)}
        <div class="item">
          <div class="item-name">{item.name}</div>
          <div class="item-desc">{item.description}</div>
        </div>
      {/each}
    {/if}
  </section>

  <footer>
    Powered by <a href="https://flui.cloud">Flui</a>
  </footer>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(html),
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0a0a0f;
    color: #e8e8ed;
    min-height: 100vh;
  }
  :global(a) {
    color: #4f9eff;
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
  }
  .page {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }
  .badge {
    display: inline-block;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #4f9eff, #a855f7);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .subtitle {
    color: #888;
    margin-bottom: 2rem;
  }
  .card {
    background: #15151c;
    border: 1px solid #2a2a35;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  .card h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    display: grid;
    gap: 0.5rem;
  }
  code {
    display: inline-block;
    background: #2a2a35;
    color: #4f9eff;
    padding: 0.1rem 0.4rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-right: 0.4rem;
  }
  .item {
    padding: 0.75rem 0;
    border-bottom: 1px solid #2a2a35;
  }
  .item-name {
    font-weight: 600;
  }
  .item-desc {
    color: #888;
    font-size: 0.9rem;
  }
  .muted {
    color: #666;
  }
  footer {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #2a2a35;
    color: #666;
    font-size: 0.85rem;
    text-align: center;
  }
</style>
