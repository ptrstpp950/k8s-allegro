Instructions - only with kubectl:

- deploy deploy.yaml (hint: --record might be useful)
- verify that dumpster-revert-svc is running
- deploy new-deployment.yaml (remember about hint)
- check deployment status and history
- verify that dumpster-revert-svc is running and working
- check what has changed (hint: --revision=x)
- revert to previous deployment - w/o re-deploying yaml