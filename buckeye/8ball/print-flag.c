
void print_flag(void)

{
  undefined8 local_78;
  undefined8 local_70;
  undefined8 local_68;
  undefined5 local_60;
  undefined3 uStack_5b;
  undefined5 uStack_58;
  undefined8 local_48;
  undefined8 local_40;
  undefined8 local_38;
  undefined5 local_30;
  undefined3 uStack_2b;
  undefined5 uStack_28;
  ulong local_20;
  int local_14;
  int local_10;
  int local_c;
  
  local_48 = 0x3948faf2b2d78fa1;
  local_40 = 0x8c6544581092c26b;
  local_38 = 0x896851660b56754a;
  local_30 = 0x678dfd0c8d;
  uStack_2b = 0xfdf22;
  uStack_28 = 0xb9259b8fca;
  local_78 = 0x333c6ab858e52faa;
  local_70 = 0xde6231384258d615;
  local_68 = 0x77fcbde8b8e9a4cd;
  local_60 = 0xa2c17a89a2;
  uStack_5b = 0x3733da;
  uStack_58 = 0x14b99d4bd8;
  local_20 = 0x25;
  for (local_c = 0x24; 0 < local_c; local_c = local_c + -1) {
    *(byte *)((long)&local_78 + (long)local_c) =
         *(byte *)((long)&local_78 + (long)(local_c + -1)) ^
         *(byte *)((long)&local_78 + (long)local_c);
  }
  for (local_10 = 0; (ulong)(long)local_10 < local_20; local_10 = local_10 + 1) {
    *(byte *)((long)&local_78 + (long)local_10) = *(byte *)((long)&local_78 + (long)local_10) ^ 0x69
    ;
  }
  for (local_14 = 0; (ulong)(long)local_14 < local_20; local_14 = local_14 + 1) {
    *(byte *)((long)&local_78 + (long)local_14) =
         *(byte *)((long)&local_48 + (long)local_14) ^ *(byte *)((long)&local_78 + (long)local_14);
  }
  puts((char *)&local_78);
  return;
}

