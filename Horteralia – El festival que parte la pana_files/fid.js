window.perfMetrics.onFirstInputDelay(function(delay, evt) {
  if (typeof window.ga !== 'undefined') {
    window.ga('send', 'event', {
      eventCategory: 'Perf Metrics',
      eventAction: 'first-input-delay',
      eventLabel: evt.type,
      // Event values must be an integer.
      eventValue: Math.round(delay),
      // Exclude this event from bounce rate calculations.
      nonInteraction: true
    })
  }
})
