## Send a message to a user

edit message and id in `v1/integrations/customerio/webhook/chat/index.ts`.
the id has to be the users `trackingToken`.

then run:

```bash
deno --allow-net v1/integrations/customerio/webhook/chat/index.ts
```

```
{"type":"tasks.v1.task_status_updated","payload":{"userId":"623d16a2-816c-4bdf-9467-8c03c1a951e5","program":"onboarding","group":"initial-lab-order","taskId":"a6e08fa3-aad3-4d59-80ef-01ab1efc4d3a","slug":"complete-initial-lab-order","updatingUserId":"b253ed47-f971-41be-bc7b-020f004f4ebf","oldStatus":"LOCKED","newStatus":"SKIPPED"}}
```
