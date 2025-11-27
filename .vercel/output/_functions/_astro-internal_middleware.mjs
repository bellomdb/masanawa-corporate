import { d as defineMiddleware, s as sequence } from './chunks/index_CWBMWIvh.mjs';
import './chunks/supabase_DdrpAs7p.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CwpWF5Z7.mjs';
import 'piccolore';
import './chunks/astro/server_CdnQXOD5.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async ({ url, redirect, cookies }, next) => {
  if (url.pathname.startsWith("/kwata") && url.pathname !== "/kwata/login" && url.pathname !== "/kwata/signup") {
    const accessToken = cookies.get("sb-access-token")?.value;
    const refreshToken = cookies.get("sb-refresh-token")?.value;
    if (!accessToken || !refreshToken) {
      return redirect("/kwata/login");
    }
    return next();
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
