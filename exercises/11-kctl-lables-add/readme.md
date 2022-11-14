# Instructions

- add following labels to `pod.yaml`:
  - `version`, `app` and `tier` - with whatever values
  - and `workshop` with value `true`
- `kubectl apply -f pod.yaml`
- check if labels had been applied using `kubectl`
- remove all resources with `workshop=true` label