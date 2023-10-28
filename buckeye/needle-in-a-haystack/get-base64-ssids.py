from scapy.all import *

def extract_ssid(packet):
    # Check if the packet is a WiFi Beacon frame
    if packet.haslayer(Dot11Beacon):
        # Extract SSID from the Beacon frame
        ssid = packet[Dot11Elt].info.decode("utf-8")
        return ssid
    else:
        return None

def process_pcap(pcap_file):
    # Read the PCAP file
    packets = rdpcap(pcap_file)

    # Iterate through each packet and extract SSID
    ssids = [extract_ssid(packet) for packet in packets if packet.haslayer(Dot11)]

    # Filter out None values (packets that are not Beacon frames)
    ssids = list(filter(None, ssids))

    return ssids

if __name__ == "__main__":
    pcap_file = "frames.pcap"
    extracted_ssids = process_pcap(pcap_file)

    print("Extracted SSIDs:")
    for ssid in extracted_ssids:
        print(ssid)

