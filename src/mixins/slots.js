export const SlotsMixin = {
  methods:{
    slots(name = 'default', props) {

      const {$slots, $scopedSlots } = props
      const scopedSlots = $scopedSlots[name]

      if( scopedSlots ) {
        return scopedSlots(props)
      }
      return $slots[name]
    }
  }
}