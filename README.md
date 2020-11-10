Hey there 👋 I created this starter vue app repo to easily demonstrate the problem. I wasn't successful with using any jsfiddle, codepen, and all the others with IE11, so this is my last resort.

## Situation

a big product is being migrated step by step from JSP + Prototype to Vue. Because of that, within the app there are #app ids scattered that currently will be emptied (`innerHTML = ''`) and injected (`.$mount()`) upon tab click.

## Successful test on chrome

- open up https://zwacky.github.io/vue2-ie11-bug/ in chrome
- the app loads up, then gets removed, and loads up again
- after a few ms v(1) turns into a v(2)

## Error test on IE11

- open up https://zwacky.github.io/vue2-ie11-bug/ in IE11
- the app loads up, then gets removed, a console error is printed out, and loads up again
- v(1) does not turn into v(2), because any further js execution is killed

Underlying problem: on IE11 emptying the DOM while a request is still in progress will kill the app and stop working/updating.

## Interesting code parts

- here happens the emptying: https://github.com/zwacky/vue2-ie11-bug/blob/master/src/main.js#L19
- here happens the post mutation of the component's state, after the DOM has been emptied already: https://github.com/zwacky/vue2-ie11-bug/blob/master/src/components/HelloWorld.vue#L49

## Related posts I found

- https://forum.vuejs.org/t/internet-explorer-garbage-collection-on-removed-nodes/17144
- https://forum.vuejs.org/t/creating-vue-instance-multiple-times-error-in-ie11/35831