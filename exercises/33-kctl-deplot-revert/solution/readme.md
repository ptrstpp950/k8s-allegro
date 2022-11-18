Instructions - only with kubectl:

- deploy deploy.yaml (hint: --record might be useful)

```bash
kubectl apply -f deploy.yaml --record true
```

- verify that dumpster-revert-svc is running

```bash
kubectl get svc dumpster-revert-svc
```

- deploy new-deployment.yaml (remember about hint)

```bash
kubectl apply -f new-deployment.yaml --record true
```

- check deployment status and history

```bash
kubectl rollout history deploy dumpster-revert-dep 
kubectl rollout status deploy dumpster-revert-dep 
```

- verify that dumpster-revert-svc is running and working

```bash
# open service
```

- check what has changed (hint: --revision=x)

```bash
kubectl rollout history deploy dumpster-revert-dep --revision=2
```

- revert to previous deployment - w/o re-deploying yaml

```bash
kubectl rollout undo deploy dumpster-revert-dep
or

kubectl rollout undo deploy dumpster-revert-dep --to-revision=2
```