# Create a Listener
How to create listener

::: tip
**For high-performance plugins use events without reflection!**
:::

### Register events without reflection
This will register events without reflection
```java
@Override
public void onEnable() {
    this.getServer().getPluginManager().subscribeEvent(PlayerJoinEvent.class, event -> {
        event.setJoinMessage(TextFormat.DARK_GREEN + event.getPlayer().getName() + " joined the game!");
    }, this);

    this.getServer().getPluginManager().subscribeEvent(PlayerQuitEvent.class, event -> {
        event.setQuitMessage(TextFormat.DARK_GREEN + event.getPlayer().getName() + " left the game!");
    }, this);
}
```

### Register events with reflection
This will create events with reflection

```java
public class EventListener implements Listener {

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        event.setJoinMessage(TextFormat.DARK_GREEN + event.getPlayer().getName() + " joined the game!");
    }

    @EventHandler
    public void onPlayerLeave(PlayerQuitEvent event) {
        event.setQuitMessage(TextFormat.DARK_GREEN + event.getPlayer().getName() + " left the game!");
    }
}
```

Then register it in your plugin.
```java
@Override
public void onEnable() {
    this.getServer().getPluginManager().registerEvents(new EventListener(), this);
}
```