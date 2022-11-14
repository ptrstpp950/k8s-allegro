# Instructions

- modify `dep.yaml` to include readiness probe
- set httpGet:path to `/test` url
- deploy `dep.yaml`, see what happens
- play around with `failureThreshold`, `periodSeconds`, `initalDelaySeconds` and `timeoutSeconds` to find best and working solution