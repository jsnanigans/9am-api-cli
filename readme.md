## Send a message to a user

edit message and id in `v1/integrations/customerio/webhook/chat/index.ts`.
the id has to be the users `trackingToken`.

then run:

```bash
deno --allow-net v1/integrations/customerio/webhook/chat/index.ts
```
