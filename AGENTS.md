<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Siteclub presentation uses shared shell, pricing and intake components with leaf route metadata; this keeps navigation and plans consistent.
- Company intake uses validated public insert-only server functions and private storage; visitors must never read requests or uploaded files.
- Prices, website delivery limits and contact destinations live in the shared business module so UI and rule tests use the same values.
